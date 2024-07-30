/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },

      colors: {
        primary: '#1ca1c1',
        second: '#ceedf580',
        dark: '#475466',
        light: '#f4f5f9',
        tertiary: '#f2f2f2',
        fog: '#ebedf0',
        'not-found': '#f7f9fb'
      },

      width: {
        'avatar-sm': '40px',
        'avatar-md': '60px',
        'avatar-lg': '130px',
        modal: '450px',
        'modal-sm': '300px',
        form: '550px'
      },

      height: {
        'avatar-sm': '40px',
        'avatar-md': '60px',
        'avatar-lg': '130px',
        modal: '600px',
        'modal-sm': '180px',
        'modal-md': '290px',
        'modal-body': '500px',
        item: '60px',
        'form-md': '600px',
        'form-xl': '930px',
        sidebar: 'calc(100vh - 60px)' // 100vh - Tab
      },

      maxWidth: {
        sidebar: '320px',
        message: '70%',
        avatar: '40px'
      },

      maxHeight: {
        'modal-body': '550px'
      },

      borderWidth: {
        xs: '1.5px'
      },

      borderRadius: {
        'mess-member': '0 8px 8px 8px',
        'mess-user': '8px 0 8px 8px'
      },

      boxShadow: {
        modal: '0 3px 10px 0 #0000001a, 0 1px 7px 0 #0000001a',
        chip: '0px 2px 10px 2px #0000001a, 0 1px 7px 0 #0000001a'
      },

      spacing: {
        lg: '465px',
        xs: '15px'
      },

      backgroundImage: {
        auth: 'url("assets/images/bg-auth.jpg")'
      },

      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        bounce2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      },
      animation: {
        bounce: 'bounce 0.5s infinite',
        bounce2: 'bounce2 0.5s infinite'
      }
    }
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar::-webkit-scrollbar': {
          width: '4px',
          height: '4px'
        },
        '.scrollbar::-webkit-scrollbar-track': {
          borderRadius: '3px'
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#4d4d4d',
          borderRadius: '3px'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
