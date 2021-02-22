const style = {
    'display': 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
    'height': '100px',
}
const Footer = () => (
    <footer style={style} className='page-footer deep-orange lighten-1'>
        <span>© {new Date().getFullYear} 2014 Copyright Text</span>
        <a className='grey-text text-lighten-4 right' href='#!'>Repo</a>
    </footer>
)

export default Footer;

