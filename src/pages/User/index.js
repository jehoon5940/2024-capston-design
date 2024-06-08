import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/Layout';

/**
 * 사용자 관리 페이지
 */

const dummyUserData = [
    {
        id: "test123",
        name: "김철수",
        store: "네네치킨",
        phoneNumber: "+82123456789",
        status: true,
    },
    {
        id: "lovekay123",
        name: "민희진",
        store: "도미노 피자 (송파점)",
        phoneNumber: "+82109876543",
        status: true,
    },
    {
        id: "user456",
        name: "이영희",
        store: "BBQ (강남점)",
        phoneNumber: "+82104567890",
        status: true,
    },
    {
        id: "user789",
        name: "박준서",
        store: "피자헛 (서초점)",
        phoneNumber: "+82106789432",
        status: true,
    },
    {
        id: "user1011",
        name: "최은비",
        store: "굽네치킨",
        phoneNumber: "+82102345678",
        status: true,
    },
    {
        id: "user1213",
        name: "김민수",
        store: "피자나라 치킨공주",
        phoneNumber: "+82103456789",
        status: false,
    },
    {
        id: "user1415",
        name: "이지은",
        store: "롯데리아",
        phoneNumber: "+82105678901",
        status: true,
    },
    {
        id: "user1617",
        name: "박현우",
        store: "맥도날드",
        phoneNumber: "+82107890123",
        status: false,
    },
    {
        id: "user1819",
        name: "최유리",
        store: "버거킹",
        phoneNumber: "+82109012345",
        status: false,
    },
    {
        id: "user2021",
        name: "김태현",
        store: "KFC",
        phoneNumber: "+82101234567",
        status: true,
    }
];

const columns = [
    {
        dataField: "id",
        text: "유저 아이디"
    },
    {
        dataField: "name",
        text: "이름"
    },
    {
        dataField: "store",
        text: "가맹점"
    },
    {
        dataField: "phoneNumber",
        text: "전화번호"
    },
    {
        dataField: "status",
        text: "운영 상태"
    }
];

const UserManagementPage = () => {

    const renderBagdgeByStatus = (status) => {
        return status ? 
               <span className='badge badge-success'>운영 중</span> : 
               <span className='badge badge-danger'>휴업 중</span>;
    }

    // Rest of the code...
    return (
        <Layout>    
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">사용자 관리</h1>
            </div>
            <div className="alert alert-info" role="alert">
                시스템 내에 등록된 사용자 목록을 조회하거나 관리할 수 있어요!
            </div>
            {/* <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary">사용자 추가</button>
            </div> */}
            <table className='table table-sm table-bordered text-center'>
                <thead className="thead thead-dark"> 
                    {columns.map(column => {
                        return (
                            <th key={column.dataField}>{column.text}</th>
                        );
                    })}
                </thead>
                <tbody>
                    {dummyUserData.map(user => (
                        <tr key={user.id}>
                            <td style={{width : "10%"}}>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.store}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{renderBagdgeByStatus(user.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
};


export default UserManagementPage;