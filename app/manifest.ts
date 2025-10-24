import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'White Star Web Solutions',
    short_name: 'White Star',
    description: 'Innovative software and technology solutions holding company',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5FAFF',
    theme_color: '#0B1F44',
    icons: [
      {
        src: '/WSWB_logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
