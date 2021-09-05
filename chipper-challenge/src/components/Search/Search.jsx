import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchBikes, getBikes } from '../../redux/actions';
// import { setPage } from '../../redux/actions';

const Search = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        title: '',
        from: '',
        to: '',
    });

    const handdleClick = (e) => {
        e.preventDefault();
        setInputs({
            title: inputs.title,
            from: inputs.from,
            to: inputs.to,
        });
        dispatch(searchBikes(inputs));
    };

    useEffect(() => {
        if (inputs.title === '') {
            dispatch(getBikes());
        }
        dispatch(searchBikes(inputs));
    }, [inputs.title, dispatch]);

    // const resetClick = () => {
    //     setInputs({
    //         title: '',
    //         from: '',
    //         to: '',
    //     });
    //     dispatch(getBikes());
    //     dispatch(setPage(0));
    // };

    return (
        <>
            <form className='form-search' onSubmit={(e) => handdleClick(e)}>
                <div className='form-description'>
                    <input
                        type='text'
                        placeholder='Search case title...'
                        onChange={(e) =>
                            setInputs({
                                title: e.target.value,
                            })
                        }
                        value={inputs.title}
                    />
                </div>
                <div className='form-from'>
                    <input
                        type='date'
                        onChange={(e) =>
                            setInputs({ ...inputs, from: e.target.value })
                        }
                        placeholder='From year'
                        value={inputs.from}
                    />
                    {/* <img src={calendar} alt='calendar' className='calendar' /> */}
                </div>
                <div className='form-to'>
                    <input
                        type='date'
                        onChange={(e) =>
                            setInputs({ ...inputs, to: e.target.value })
                        }
                        placeholder='To year'
                        value={inputs.to}
                    />
                    {/* <img src={calendar} alt='calendar' /> */}
                </div>
                <button className='btn-form' type='submit'>
                    Find cases
                </button>
            </form>
            {/* <button className='btn-reset' onClick={() => resetClick()}>
                Reset
            </button> */}
        </>
    );
};

export default Search;
