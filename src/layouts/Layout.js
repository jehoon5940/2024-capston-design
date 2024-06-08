// Layout.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    return (
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div class="sidebar-brand-text mx-3">{process.env.REACT_APP_NAME}</div>
                </a>
                <hr class="sidebar-divider my-0" />
                <li class="nav-item active">
                    <a class="nav-link" href="/">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
                <hr class="sidebar-divider" />
                <div class="sidebar-heading">   
                    시스템 기능
                </div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>마스터 관리</span>
                    </a>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">마스터 관리</h6>
                            <a class="collapse-item" href="/user">사용자 관리</a>
                            <a class="collapse-item" href="/frachisee">가맹점 관리</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider" />
            </ul>

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
    
        
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    
            
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
            
                        <ul class="navbar-nav ml-auto">            
                            <li class="nav-item dropdown no-arrow d-sm-none">
                                <a class="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-search fa-fw"></i>
                                </a>
                    
                                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button">
                                                    <i class="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <div class="topbar-divider d-none d-sm-block"></div>

                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="/" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">관리자</span>
                                    <img class="img-profile rounded-circle" alt="profile"
                                        src="img/undraw_profile.svg" />
                                </a>
                    
                                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <a class="dropdown-item" onClick={handleLogout} href="/" data-toggle="modal" data-target="#logoutModal">
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
    
                        </ul>
    
                    </nav>

                    <div class="container-fluid">
                        {children}
                    </div>
                </div>

                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; 2024 {process.env.REACT_APP_NAME}</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
};

export default Layout;
