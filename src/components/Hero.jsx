import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import HeroImage from '../assets/img/hero.svg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Hero = () => {
	return (
		<section id='hero' className='_hero'>
			<Container>
				<div className='row flex-lg-row-reverse _flex_center justify-content-lg-between g-5'>
					<div
						data-aos='fade-left'
						data-aos-delay='400'
						className='hero_image col-10 col-md-6 col-lg-5 p-lg-5 mb-lg-4'>
						<img src={HeroImage} className='img-fluid' alt='Hero' />
					</div>

					<div
						data-aos='fade-right'
						data-aos-delay='400'
						data-aos-offset='100'
						className='hero_text col-lg-6 mb-5 mb-lg-2 pt-lg-3'>
						<HeroText />
					</div>
				</div>
			</Container>
		</section>
	);
};

const HeroText = () => {
	return (
		<>
			<div className='_header'>
				<h1 className='_heading mb-2'>Hi, I'm Yusuf Daudu</h1>
				<h3 className='_sub_heading fw-normal'>Full-Stack Developer</h3>
			</div>

			<p className='desc_text mb-4 fw-light'>
				I'm a goal-oriented software developer with adequate experience and knowledge in developing
				responsive, well-designed and functional web applications.
			</p>

			<div className='_flex cta'>
				<Link to='contact' duration={400} smooth={true} className='btn btn-outline-light'>
					Contact Me
				</Link>

				<div className='social_media'>
					<a href='https://github.com/dyCodes' className='' target='_blank' rel='noopener noreferrer'>
						<BsGithub />
					</a>
					<a
						href='https://linkedin.com/in/yusuf-daudu-tech'
						className=''
						target='_blank'
						rel='noopener noreferrer'>
						<BsLinkedin />
					</a>
				</div>
			</div>
		</>
	);
};

export default Hero;
