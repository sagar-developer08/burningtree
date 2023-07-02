import ProjectCardHorizontal from '@/components/ProjectCardHorizontal';
import RepositoryCard from '@/components/RepositoryCard';
import ContentRenderer from '@/components/ContentRenderer';
import Reveal from '@/components/Reveal';
import Carousel from './Carousel';

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto">
      <h2 style={{ textAlign: 'center' }}>Our Clients</h2>
      <div className="prose prose-invert md:flex">

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '10px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1688328210/hdfc-logo-hdfc-icon-free-free-vector_tywlgs.webp"
              alt="Image 1"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1687107071/buringTree/logo-ukraine-5e86fcda835fb7fe833446766436041f_s7pbt1.svg"
              alt="Image 2"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106841/buringTree/primary_gaide4.svg"
              alt="Image 3"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106689/buringTree/logo_1_tpv6ij.png"
              alt="Image 4"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1688333587/images_uuzby4.png"
              alt="Image 5"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106308/buringTree/logo-1_w4ewuq.png"
              alt="Image 6"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106188/buringTree/logo_trrsgh.png"
              alt="Image 7"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106120/buringTree/HDFC_logo_cjlf2d.svg"
              alt="Image 8"
              style={{ width: '100%', padding: '10px' }}
            />

          </div>
          {/* Repeat the above grid-item structure for the remaining images */}
        </div>
        {/* <Carousel /> */}
      </div>
    </div>
  );
};

export default Layout;
