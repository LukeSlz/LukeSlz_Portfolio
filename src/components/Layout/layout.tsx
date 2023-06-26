import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import './layout.scss';

const Layout = () => {
  return  (
    <div className='App'>
      <Sidebar />
      <div className="page">
        <span className="tags tags__top">&lt;body&gt;</span>

        <Outlet />

        <span className="tags tags__bottom">
        &lt;/body&gt;
        <br />
        <span className="tags__bottom__html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}


export default Layout;

//TODO: change main font.