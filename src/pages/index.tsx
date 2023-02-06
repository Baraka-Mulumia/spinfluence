import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Sticky, StickyContainer } from 'react-sticky';

import { Banner } from '@/components/organisms/Banner';
import { Box } from '@chakra-ui/react';
import { ContactUs } from '@/components/organisms/ContactUs';
import { DesignPrincipals } from '@/components/organisms/DesignPrincipals';
import { Element } from 'react-scroll';
import { FAQ } from '@/components/organisms/FAQ';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { Testimonials } from '@/components/organisms/Testimonials';
import { WhyUsSection } from '@/components/organisms/WhyUsSection';
import { map } from 'lodash';

const Block: FunctionComponent<
  PropsWithChildren<{
    name: string;
  }>
> = ({ children, name }) => {
  return <Element name={name}>{children}</Element>;
};

let blocks = [
  {
    name: 'home',
    component: <Banner />,
  },
  {
    name: 'services',
    component: <ServicesSection />,
  },
  {
    name: 'design',
    component: <DesignPrincipals />,
  },
  {
    name: 'why-us',
    component: <WhyUsSection />,
  },
  {
    name: 'testimonials',
    component: <Testimonials />,
  },
  {
    name: 'faq',
    component: <FAQ />,
  },
  {
    name: 'contact-us',
    component: <ContactUs />,
  },
];

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  const handleStickyStateChange = useCallback(
    (isSticky: boolean) => {
      setIsSticky(isSticky);
    },
    [setIsSticky],
  );

  useEffect(() => {
    // if user scrolls down, then the header will be sticky and vice versa
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleStickyStateChange(true);
      } else {
        handleStickyStateChange(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 100) {
          handleStickyStateChange(true);
        } else {
          handleStickyStateChange(false);
        }
      });
    };
  }, [handleStickyStateChange]);

  return (
    <Box as={'main'}>
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <Box style={style} zIndex={'sticky'}>
              <Header isSticky={isSticky} />
            </Box>
          )}
        </Sticky>
        {map(blocks, (block) => (
          <Block key={block.name} name={block.name}>
            {block.component}
          </Block>
        ))}
        <Footer />
      </StickyContainer>
    </Box>
  );
}
