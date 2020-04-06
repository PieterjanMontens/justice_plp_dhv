import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import SubscribePagePreview from './preview-templates/SubscribePagePreview'

CMS.init()
CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('subscribe', SubscribePagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
