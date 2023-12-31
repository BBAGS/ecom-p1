import Image from 'next/image';
import SwitchTheme from '../SwitchTheme';

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className='navbar mx-auto max-w-7xl bg-base-100 p-4'>
      <div className='flex-1'>
        <a className='btn-ghost btn text-xl normal-case'>Lentera Star</a>
      </div>
      <div className='flex-none'>
        <SwitchTheme />
        <div className='dropdown-end dropdown'>
          <label tabIndex={0} className='btn-ghost btn-circle btn'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className='card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow'
          >
            <div className='card-body'>
              <span className='text-lg font-bold'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn-primary btn-block btn'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown-end dropdown'>
          <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
            <div className='w-10 rounded-full'>
              {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
                src='/nick.png'
                alt='Profile Image'
                width={180}
                height={37}
                priority
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li>
              <a className='justify-between'>
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
