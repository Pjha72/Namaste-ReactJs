export const Title = () => (
    <a href='/'>
        <img 
        className='logo'
        alt="Logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7y_0Rb9se-3D9g-QeQgQP8w9rBVnw3hwZg&usqp=CAU" 
        />
    </a>
);


// Haeder Component
const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;