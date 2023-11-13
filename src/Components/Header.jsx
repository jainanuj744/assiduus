import "../App.css";

function Hello() {
    return (
        <div className="header">
            {/* <div><img src="./logo.jpeg" alt='logo' className='logo' /></div> */}
            <div className="logo">
                <i class="fa-brands fa-slack"></i>
            </div>
            <div className="headerIcons">
                <div className="searchInput">
                    <i class="fa-solid fa-magnifying-glass"><input /></i>
                </div>
                <div>
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </div>
    );
}

export default Hello;
