import { Outlet } from "react-router-dom";

function AboutPage(){
    return(
        <div>
            <h4>회사 정보</h4>
            <Outlet />
        </div>
    )
}

function MemberPage(){
    return(
        <div>
            <p>회사 멤버</p>
        </div>
    )
}

function LocationPage(){
    return(
        <div>
            <p>회사 위치</p>
        </div>
    )
}

export {AboutPage, MemberPage, LocationPage};