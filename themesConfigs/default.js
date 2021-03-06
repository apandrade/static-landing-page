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
    heroLayerCta: {
      position: 'left',
      bgColor: 'rgba(255, 255, 255, 0.5)',
      contentAlign: undefined,
      contentValign: undefined,
      hide: false,
      height: undefined,
      width: undefined,          
    },
    cta: {
      title: 'Lorem Ipsum dolor sit amet',
      subtitle: 'Lorem Ipsum dolor sit amet',
      textAlign: 'center',
      textValign: 'center',
      fontFamily: 'Advent Pro',
    },    
    ctaButton: {
        type: 'danger',
        disabled: undefined,
        url: 'http://www.google.com',
        text: 'Click Here',
    },
    heroLayerVideo: {
      hide: false,
      position: 'right',
      bgColor: undefined,
      contentValign: undefined,
      contentAlign: undefined,
      contentValign: undefined,
      height: undefined,
      width: undefined,          
    },
    youtubeVideo: {
      width: "250",
      height: "150",
      url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    }
}