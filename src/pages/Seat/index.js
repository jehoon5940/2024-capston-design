import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import { useLocation } from 'react-router-dom';
import './SeatManagementPage.css'; // CSS 파일 import

/**
 * 좌석 관리 페이지
 */

const generateRandomSeats = (numSeats, maxX, maxY) => {
    const seats = [];
    const usedPositions = new Set();

    while (seats.length < numSeats) {
        const x = Math.floor(Math.random() * maxX) + 1;
        const y = Math.floor(Math.random() * maxY) + 1;
        const position = `${x},${y}`;

        if (!usedPositions.has(position)) {
            usedPositions.add(position);
            seats.push({
                id: `Seat${seats.length + 1}`,
                type: ["일반석"][Math.floor(Math.random() * 3)],
                status: Math.random() > 0.5,
                x,
                y
            });
        }
    }

    return seats;
};

const dummySeatData = generateRandomSeats(10, 5, 5); // 좌석 수와 그리드 크기 설정

const SeatManagementPage = () => {
    const location = useLocation();
    const { store } = location.state || {}; // 가맹점 정보

    const [seats, setSeats] = useState(dummySeatData);

    const toggleSeatStatus = (id) => {
        setSeats(seats.map(seat => 
            seat.id === id ? { ...seat, status: !seat.status } : seat
        ));
    };

    return (
        <Layout>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{store?.store_name} - 좌석 관리</h1>
            </div>
            <div className="alert alert-info" role="alert">
                {store?.store_name} 가맹점의 좌석 목록을 조회하거나 관리할 수 있어요!
            </div>
            <div className="seat-layout">
                {seats.map(seat => (
                    <div 
                        key={seat.id} 
                        className={`seat ${seat.status ? 'available' : 'unavailable'}`}
                        style={{ gridArea: `${seat.y} / ${seat.x} / span 1 / span 1` }}
                        onClick={() => toggleSeatStatus(seat.id)}
                    >
                        <span>{seat.id}</span>
                        <span>{seat.type}</span>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default SeatManagementPage;
