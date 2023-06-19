import React, { FC } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { ReactSVG } from 'react-svg';
import animationData from '../../../lotties/project_guy.json';

import './Footer.sass';
import Lottie from 'react-lottie';

type FooterProps = {
}

const FooterComponent: FC<FooterProps> = () => {
	const {
		logoFooter,
		iconFire,
		iconFeedback
	} = useStaticQuery(graphql`
		query  {
			logoFooter: file(relativePath: { eq: "logo-footer.svg" }) {
			  publicURL
			  name
		  	}
			iconFire: file(relativePath: { eq: "icon-fire.svg" }) {
			  publicURL
			  name
		  	}
			iconFeedback: file(relativePath: { eq: "icon-feedback.svg" }) {
			  publicURL
			  name
		  	}
		}`);

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

//   const ref = useRef();
//   const [ imagePos, setImagePos ] = useState({ x: 0, y: 0 });

//   const handlerMoveMouse = useCallback((e) => {
// 	  const rect = ref.current.getBoundingClientRect();
// 	  setImagePos({ x: e.x - rect.x, y: e.y - rect.y });
//   }, []);

//   useEffect(() => {
// 	  const _ref = ref.current;
// 	  _ref.addEventListener('mousemove', handlerMoveMouse);
// 	  return () => {
// 		  _ref.removeEventListener('mousemove', handlerMoveMouse);
// 	  }
//   }, [ handlerMoveMouse ]);


	return (
		<footer className="footer">
			{/* <div ref={ ref } className='draw-container'>
		  <span className='image' style={{ left: imagePos.x, top: imagePos.y }}/>
	  </div> */}
			<div className="wrapper">
				<div className="footer-inner">
					<div className="footer__slogan">
						<div className="footer__slogan-main">
							<ReactSVG 
							className="page-svg" 
							src={logoFooter.publicURL} 
							/>
						</div>
						<div className="footer__slogan-fire">
							<ReactSVG className="page-svg" src={iconFire.publicURL} />
						</div>
						
					</div>
					<div className="footer__row">
						<div className="footer__city">
							<div className="page-title-caption-4">Moscow, 2023</div>
						</div>
						<div className="footer__nav">
							<nav className="nav">
								<a className="page-link" href="">
								<div className="page-title-caption-4">Главная </div>
							</a><a className="page-link" href="">
									<div className="page-title-caption-4">Кейсы </div>
								</a><a className="page-link" href="">
									<div className="page-title-caption-4">Команда </div>
								</a><a className="page-link" href="">
									<div className="page-title-caption-4">Карьера</div>
								</a></nav>
						</div>
						<div className="footer__author">
							<a className="page-link" href="">
								<div className="page-title-caption-4">Design – MAX</div>
							</a></div>
					</div>
					<div className="footer__feedback">
						<Lottie 
							options={defaultOptions}  
							eventListeners={[
								{
								  eventName: 'complete',
								  callback: () => console.log('the animation completed:'),
								},
							  ]}
							/>
						{/* <ReactSVG className="page-svg" src={iconFeedback.publicURL} /> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
export { FooterComponent };