export default  {
    head: {
      title: 'Static landing page default theme',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create your own static landing page with nuxt.js'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/default/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Advent Pro&display=swap' },
      ],
    },
    menu: {
        bgColor: '#000',
        position: 'default',
        height: '80px',
        borderBottom: '10px solid red',
    },
    logo: {
        imageUrl:'https://via.placeholder.com/250x100',
        position: 'center',
        link: '/',
        text: 'Site Logo',
        fontFamily: undefined,
        fontSize: undefined,
        fontColor: undefined,
        lineHeight: undefined,
    },
    hero: {        
      size: 'full',
      bgImage: '/default/bg-hero.png',
      bgColor: undefined,
      bgRepeat: 'no-repeat',
      bgSize: 'cover',
    },
    heroLayerText: {
      title: 'Lorem Ipsum dolor sit amet',
      subtitle: 'Lorem Ipsum dolor sit amet',
      layerTextAlign: 'center',
      layerTextValign: 'center',
      layerAlign: 'left',
      layerBgColor: 'rgba(255, 255, 255, 0.5)',
      fontFamily: 'Advent Pro',      
    },
    heroButton: {
        type: 'danger',
        disabled: undefined,
        url: 'http://www.google.com',
        text: 'Click Here',
    }
}