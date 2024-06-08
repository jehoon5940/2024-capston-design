import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/Layout';
import { useNavigate } from 'react-router-dom';

/**
 * 사용자 관리 페이지
 */

const dummyData = [
    {
        id: "1",
        owner_id: "김철수",
        owner_num: "+82123456789",
        store_name: "네네치킨",
        store_addr: "서울특별시 강남구 테헤란로",
        store_lat: "37.4979",
        store_lon: "127.0276",
        store_status: "영업중"
    },
    {
        id: "2",
        owner_id: "민희진",
        owner_num: "+82109876543",
        store_name: "소떡소떡",
        store_addr: "서울특별시 서초구 서초대로",
        store_lat: "37.4875",
        store_lon: "127.0093",
        store_status: "영업중"
    },
    {
        id: "3",
        owner_id: "이영희",
        store_name: "피자나라 치킨공주",
        owner_num: "+82105678901",
        store_addr: "서울특별시 중구 세종대로",
        store_lat: "37.5663",
        store_lon: "126.9780",
        store_status: "휴업중"
    },
    {
        id: "4",
        owner_id: "박준서",
        owner_num: "+82102345678",
        store_name: "김밥천국",
        store_addr: "서울특별시 종로구 종로",
        store_lat: "37.5704",
        store_lon: "126.9924",
        store_status: "영업중"
    },
    {
        id: "5",
        owner_id: "최은비",
        owner_num: "+82103456789",
        store_name: "한신포차",
        store_addr: "서울특별시 용산구 한강대로",
        store_lat: "37.5326",
        store_lon: "126.9752",
        store_status: "휴업중"
    },
    {
        id: "6",
        owner_id: "김민수",
        owner_num: "+82106789012",
        store_name: "할매 떡볶이",
        store_addr: "서울특별시 강동구 천호대로",
        store_lat: "37.5301",
        store_lon: "127.1238",
        store_status: "영업중"
    },
    {
        id: "7",
        owner_id: "이지은",
        owner_num: "+82107890123",
        store_name: "버거킹",
        store_addr: "서울특별시 송파구 올림픽로",
        store_lat: "37.5145",
        store_lon: "127.1058",
        store_status: "영업중"
    },
    {
        id: "8",
        owner_id: "박현우",
        owner_num: "+82109012345",
        store_name: "맥도날드",
        store_addr: "서울특별시 강북구 도봉로",
        store_lat: "37.6396",
        store_lon: "127.0257",
        store_status: "휴업중"
    },
    {
        id: "9",
        owner_id: "최유리",
        owner_num: "+82101234567",
        store_name: "스타벅스",
        store_addr: "서울특별시 성북구 종암로",
        store_lat: "37.5891",
        store_lon: "127.0337",
        store_status: "영업중"
    },
    {
        id: "10",
        owner_id: "김태현",
        owner_num: "+82104567890",
        store_name: "버거킹",
        store_addr: "서울특별시 동대문구 천호대로",
        store_lat: "37.5743",
        store_lon: "127.0397",
        store_status: "휴업중"
    }
];
const columns = [
    {
        dataField: "id",
        text: "고유값",
        isRender: false
    },
    {
        dataField: "store_name",
        text: "가맹점 이름",
        isRender: true
    },
    {
        dataField: "owner_id",
        text: "가맹점주",
        isRender: true
    },
    {
        dataField: "owner_num",
        text: "가맹점 번호",
        isRender: true
    },
    {
        dataField: "store_addr",
        text: "가맹점 주소",
        isRender: true
    },
    {
        dataField: "store_lat",
        text: "가맹점 위도",
        isRender: true
    },
    {
        dataField: "store_lon",
        text: "가맹점 경도",
        isRender: true
    },
    {
        dataField: "store_status",
        text: "가맹점 상태",
        isRender: true
    },
    {
        dataField: "actions",
        text: "옵션",
        isRender: true
    }
];

const FranchiseeManagePage = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(dummyData);

    const renderBagdgeByStatus = (status) => {
        return status ? 
               <span className='badge badge-success'>운영 중</span> : 
               <span className='badge badge-danger'>휴업 중</span>;
    }

    const onStoreMenuManageClick = (store) => {
        navigate(`/frachisee/${store.id}/menu`, { state: { store } });
    }

    const onStoreSeatManageClick = (store) => {
        navigate(`/frachisee/${store.id}/seats`, { state: { store } });
    }

    // Rest of the code...
    return (
        <Layout>    
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">가맹점 관리</h1>
            </div>
            <div className="alert alert-info" role="alert">
                시스템 내에 등록된 가맹점 목록을 관리해 보세요!
            </div>
            {/* <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary">가맹점 추가</button>
            </div> */}
            <table className='table table-sm table-bordered text-center'>
                <thead className="thead thead-dark"> 
                    {columns.filter((store) => store.isRender).map(column => {
                        return (
                            <th key={column.dataField}>{column.text}</th>
                        );
                    })}
                </thead>
                <tbody>
                    {dummyData.map(user => (
                        <tr key={user.id}>
                            {columns.filter((column) => column.isRender).map(column => {
                                if (column.dataField === "store_status") {
                                    return (
                                        <td key={column.dataField}>{renderBagdgeByStatus(user[column.dataField])}</td>
                                    );
                                }else if (column.dataField === "actions") {
                                    return (
                                        <td key={column.dataField}>
                                            <button onClick={() => onStoreMenuManageClick(user)}
                                                    className="btn btn-info btn-sm mr-2">메뉴 관리</button>
                                            <button onClick={() => onStoreSeatManageClick(user)}
                                                    className="btn btn-secondary btn-sm">좌석 관리</button>
                                        </td>
                                        
                                    );
                                }
                                return (
                                    <td key={column.dataField}>{user[column.dataField]}</td>
                                );
                            })}
                        </tr>
                        // <tr key={user.id}>
                        //     <td style={{width : "10%"}}>{user.id}</td>
                        //     <td>{user.name}</td>
                        //     <td>{user.store}</td>
                        //     <td>{user.phoneNumber}</td>
                        //     <td>{renderBagdgeByStatus(user.status)}</td>
                        // </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
};


export default FranchiseeManagePage;