/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            keyframes: {
                'breathing-planet': {
                    '0%': {
                        transform: 'rotate(0deg) scale(1.0)',
                        'box-shadow': '0 0 0px 15px rgb(255 255 255 / 30%)'
                    },
                    '50%': {
                        transform: 'rotate(180deg) scale(1.0) skew(45deg)',
                        'box-shadow': '0 0 0px 5px rgb(255 255 255 / 30%), ' +
                            '0 0 0px 10px rgb(255 255 255 / 25%), ' +
                            '0 0 0px 15px rgb(255 255 255 / 20%), ' +
                            '0 0 0px 25px rgb(255 255 255 / 15%);'
                    },
                    '100%': {
                        transform: 'rotate(360deg) scale(1.0)',
                        'box-shadow': '0 0 0px 15px rgb(255 255 255 / 30%)'
                    }
                },
                shaking: {
                    '30%': {
                        transform: 'rotate(8deg)'
                    },
                    '40%': {
                        transform: 'rotate(-8deg)'
                    },
                    '50%': {
                        transform: 'rotate(8deg)'
                    },
                    '60%': {
                        transform: 'rotate(-8deg)'
                    },
                },
                ringing: {
                    '0%': {
                        'box-shadow': '0 0 0 5px rgba(255, 255, 255, 0.2), ' +
                            '0 0 0 10px rgba(255, 255, 255, 0.1)'
                    },
                    '33%': {
                        'box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.2),' +
                            '0 0 0 20px rgba(255, 255, 255, 0.1)'
                    },
                    '50%': {
                        'box-shadow': '0 0 0 5px rgba(255, 255, 255, 0.2), ' +
                            '0 0 0 10px rgba(255, 255, 255, 0.1)'
                    },
                    '66%': {
                        'box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.2),' +
                            '0 0 0 20px rgba(255, 255, 255, 0.1)'
                    },
                    '100%': {
                        'box-shadow': '0 0 0 5px rgba(255, 255, 255, 0.2), ' +
                            '0 0 0 10px rgba(255, 255, 255, 0.1)'
                    }
                },
                'ringing-slow': {
                    '0%': {
                        'box-shadow': '0 0 0 5px rgba(255, 255, 255, 0.2), ' +
                            '0 0 0 10px rgba(255, 255, 255, 0.1)'
                    },
                    '50%': {
                        'box-shadow': '0 0 0 10px rgba(255, 255, 255, 0.2),' +
                            '0 0 0 20px rgba(255, 255, 255, 0.1)'
                    },
                    '100%': {
                        'box-shadow': '0 0 0 5px rgba(255, 255, 255, 0.2), ' +
                            '0 0 0 10px rgba(255, 255, 255, 0.1)'
                    }
                },
                'pulse-slow': {
                    '0%': {
                        transform: 'scale(1.0)'
                    },
                    '50%': {
                        transform: 'scale(1.1)',
                    },
                    '100%': {
                        transform: 'scale(1.0)',
                    }
                },
                'pulse-fast': {
                    '0%': {
                        transform: 'scale(1.0)'
                    },
                    '33%': {
                        transform: 'scale(1.1)'
                    },
                    '50%': {
                        transform: 'scale(1.0)'
                    },
                    '66%': {
                        transform: 'scale(1.1)'
                    },
                    '100%': {
                        transform: 'scale(1.0)'
                    }
                }
            }
        },
        animation: {
            planet: "breathing-planet 2s ease-in-out infinite",
            ring: "ringing 2s ease-in-out infinite",
            ringSlow: "ringing-slow 2s ease-in-out infinite",
            shake: "shaking 1s infinite",
            pulseSlow: "pulse-slow 2s ease-in-out infinite",
            pulseFast: "pulse-fast 2s ease-in-out infinite",
        },
    },
    plugins: [],
}
