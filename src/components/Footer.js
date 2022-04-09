import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { Button } from 'react-bootstrap';

const Footer = () => {

    const { setTraggerFilteredTodos } = useContext(DataContext); // destructuring. contexapi kullanarak verileri aliyoruz.

    const updateShowFilteredTodos = (e) => {
        //console.log(e)
        setTraggerFilteredTodos(e)
    }

    return (
        <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* bunlar filtreleme icin gerekli olan tuslar */}
            <div style={{ width: '33%' }}>
                <Button style={{ width: '100%' }} className='buttonFilter bg-danger' variant="danger" onClick={() => updateShowFilteredTodos('active')}>ACTIVE</Button>
            </div>
            <div style={{ width: '33%' }} className='mx-2'>
                <Button style={{ width: '100%' }} className='buttonFilter bg-primary' variant="primary" onClick={() => updateShowFilteredTodos('all')}>ALL</Button>
            </div>
            <div style={{ width: '33%' }}>
                <Button style={{ width: '100%' }} className='buttonFilter bg-success' variant="success" onClick={() => updateShowFilteredTodos('complete')}>COMPLETE</Button>
            </div>
        </div>
    )
}

export default Footer
