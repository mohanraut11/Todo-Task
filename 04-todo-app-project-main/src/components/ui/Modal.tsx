import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4'>
      <div
        className={twMerge(
          'relative w-full max-w-2xl mx-auto bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out transform scale-100',
          className
        )}
      >
        <div className='flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700'>
          <h3 className='text-xl font-semibold text-blue-800 dark:text-white'>{title}</h3>
          <button
            onClick={onClose}
            className='p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition'
            aria-label='Close'
          >
            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='p-6 text-gray-800 dark:text-gray-200'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;