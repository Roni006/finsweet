import Container from '../../components/Common/Container'
import blog1 from '../../assets/blog/blog1.png';
import blog2 from '../../assets/blog/blog2.png';
import blog3 from '../../assets/blog/blog3.png';
const Blog = () => {
    const blogs = [
        {
            img: blog1,
            data: '19 Jan 2022',
            heading: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            paragraph: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            img: blog2,
            data: '19 Jan 2022',
            heading: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            paragraph: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            img: blog3,
            data: '19 Jan 2022',
            heading: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            paragraph: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
    ]
    return (
        <section className='pt-[77px] pb-[175px]'>
            <Container>
                <div>
                    <h1 className='gbl-blog mb-16'>Our Blog</h1>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            blogs.map(blog => (
                                <div className='w-[405px] '>
                                    <img src={blog.img} alt="" />
                                    <p className='text-[16px] leading-7 font-poppins text-[rgba(40,41,56,0.7)] font-medium mt-10'>{blog.date}</p>
                                    <h3 className='gbl-fh py-4'>{blog.heading}</h3>
                                    <p className=' text-[16px] leading-7 font-poppins text-[rgba(40,41,56,0.7)] font-normal pb-8'>{blog.paragraph}</p>
                                    <div>
                                        <a href="#" id='svg' className='gblf'>Read More
                                            {/* <span><svg id='color' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
                                    <path d="M24.5303 6.05377C24.8232 5.76087 24.8232 5.286 24.5303 4.99311L19.7574 0.220137C19.4645 -0.0727568 18.9896 -0.0727568 18.6967 0.220137C18.4038 0.51303 18.4038 0.987904 18.6967 1.2808L22.9393 5.52344L18.6967 9.76608C18.4038 10.059 18.4038 10.5338 18.6967 10.8267C18.9896 11.1196 19.4645 11.1196 19.7574 10.8267L24.5303 6.05377ZM0 5.52344V6.27344H24V5.52344V4.77344H0V5.52344Z" fill="#F4F6FC" />
                                </svg></span> */}
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Blog