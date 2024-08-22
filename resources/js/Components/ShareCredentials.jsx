// resources/js/Components/ShareCredentials.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaTrophy, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp, FaEllipsisH } from 'react-icons/fa';
import NavLink from './NavLink';

const ShareCredentials = ({urllinkedin}) => {
  const handleShareClick = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, '_blank', 'width=600,height=400');
  };
  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>
          <FaTrophy /> Compartir Credenciales
        </Card.Title>
        <Card.Text>
          Muestra esta credencial en tu red social
        </Card.Text>
<div className="flex gap-2 justify-center">
        { <a
      rel="noreferrer nofollow"
      data-identifier="linkedin:share"
      data-provider="linkedin"
      data-action="share"
      aria-label="compartir en linkedin"
      data-uuid="qq0kGT9bpp"
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${urllinkedin}`} 
      onClick={handleShareClick}
      className="gs-ld noslimstat gs-linkedin-share gs-tracking"
      data-url={{urllinkedin}} 
      data-url-id="zmjV"
      style={{ pointerEvents: 'auto' }}
      data-value="0"
    >        <div className="px-[0.75rem] py-[0.375rem] border-solid border-[1.5px] border-[#0d6efd]  rounded-md hover:bg-blue-500 hover:text-white"> 
        <FaLinkedin />
        </div>
    </a> }

        {/* <Button variant="outline-primary" className="mr-2">
          <FaLinkedin />
        </Button> */}
        <a rel="noreferrer nofollow"
           data-identifier="facebook:share"
           data-provider="facebook"
           data-action="share"
           aria-label="compartir en facebook"
           data-uuid="n8Djw4PWJi" 
           href={`https://www.facebook.com/sharer/sharer.php?u=${urllinkedin}`} 
           onClick={handleShareClick}
           class="gs-fb noslimstat gs-facebook-share gs-tracking  " 
           data-url={{urllinkedin}} 
           data-url-id="TiGK" 
           data-value="0"
        >
        <div className="px-[0.75rem] py-[0.375rem] border-solid border-[1.5px] border-[#0d6efd]  rounded-md hover:bg-blue-500 hover:text-white"> 
        <FaFacebook />
        </div>
        </a>
        <a rel="noreferrer nofollow"
        data-identifier="twitter:tweet" 
        data-provider="twitter" 
        data-action="tweet" 
        aria-label="compartir en twitter" 
        data-uuid="YlI8mjzrQu" 
           href={`https://api.at.getsocial.io/s?channel=tw&amp;url=${urllinkedin}`} 
           onClick={handleShareClick}
           class="gs-tw noslimstat gs-twitter-tweet gs-tracking  " 
           data-url={{urllinkedin}} 
           data-url-id="TiGK" 
           data-value="0"
        >
        <div className="px-[0.75rem] py-[0.375rem] border-solid border-[1.5px] border-[#0d6efd]  rounded-md hover:bg-blue-500 hover:text-white"> 
        <FaTwitter />
        </div>
        </a>
        <a rel="noreferrer nofollow" 
        data-identifier="whatsapp:share" 
        data-provider="whatsapp" 
        data-action="share" 
        aria-label="compartir en whatsapp" 
        data-uuid="JWN34F1mwn" 
           href={`https://api.at.getsocial.io/s?channel=wa&amp;device=desktop&amp;url=${urllinkedin}`} 
           data-url-id="TiGK" 
        data-value="0"
        >
        <div className="px-[0.75rem] py-[0.375rem] border-solid border-[1.5px] border-[#0d6efd]  rounded-md hover:bg-blue-500 hover:text-white"> 
        <FaWhatsapp />
        </div>
        </a>        

        <Button variant="outline-primary">
          <FaEllipsisH />
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShareCredentials;