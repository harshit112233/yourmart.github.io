import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div class="logo">YourMart</div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="find yourmart.com"></input>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <input type="checkbox" id="click"></input>
            <label for="click" class="menu-btn">
                <i class="fas fa-bars"></i>
            </label>
            <ul>
                <li><a class="active" href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <i class="fa fa-shopping-cart"></i>
            </ul>
        </nav>
    )
}

export default Navbar
