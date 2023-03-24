import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import { ContentWrapper, NewPassword, PageTransitionAnimation } from 'web-ui';
import { PageSeo } from '../../components';

const StyledSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Content = styled(Box)`
  padding: 8rem 0 8rem 0;
  width: 100%;
  max-width: 98rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 10rem 0 8rem 0;
  }
`;

const pageTitle = 'Create random, strong, secure password | Password Generator';
const pageDescription = 'Generate strong and secure password';

const CreatePassword: NextPage = () => {
  return (
    <>
      <PageSeo title={pageTitle} description={pageDescription} />
      <PageTransitionAnimation>
        <StyledSection id="#new-password">
          <ContentWrapper className="flex flex-1 justify-center align-center">
            <Content>
              <NewPassword />
            </Content>
          </ContentWrapper>
        </StyledSection>
      </PageTransitionAnimation>
    </>
  );
};

export default CreatePassword;
