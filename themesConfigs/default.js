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
        position: 'top',
        height: '100px',
        borderBottom: '1px solid red',
    },
    logo: {
        url:'https://via.placeholder.com/250x100',
        position: 'center',
        height: '100px',
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    hero: {        
      hideLayerText: false,
      size: 'half',
      bgImage: '/default/bg-hero.png',
      bgColor: 'green',
    },
    heroLayer: {
      title: 'Hero Title',
      subtitle: 'Hero Subtitle',
      link: '/',
      linkText: 'Click Here',
      layerTextAlign: 'center',
      layerTextValign: 'center',
      layerAlign: 'center',
      layerBgColor: 'rgba(0, 0, 0, 0.5)',
      fontFamily: 'Advent Pro',      
    },
    heroButton: {
        type: 'info',
        disabled: false,
        url: 'http://www.google.com',
        text: 'Clique aqui2',
    }
}