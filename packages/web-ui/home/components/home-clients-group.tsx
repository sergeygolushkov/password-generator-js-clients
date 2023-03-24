import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import {
  ContentWrapper,
  fadeInLeftKeys,
  fadeInLeftVariants,
  fadeInRightKeys,
  fadeInRightVariants,
} from '../../common';

export type HomeClientsGroupProps = PropsWithChildren & {
  groupName: string;
  groupImage: JSX.Element;
};

const SectionContainer = styled(Box)`
  margin-top: 5rem;
`;

const GroupContentBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
    & > div {
      padding-left: 0;
    }
  }

  ${(props) => props.theme.breakpoints.up('sm')} {
    & > div:first-of-type {
      flex: 0.4;
    }
    & > div:first-of-type + div {
      flex: 0.6;
    }
  }
`;

export const HomeClientsGroup = ({
  groupName,
  children,
  groupImage,
}: HomeClientsGroupProps) => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <GroupContentBox>
          <motion.div
            variants={fadeInRightVariants}
            initial={fadeInRightKeys.initial}
            animate={fadeInRightKeys.animate}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2 }}
            className="padding-top-2 text-center relative"
          >
            {groupImage}
          </motion.div>
          <motion.div
            variants={fadeInLeftVariants}
            initial={fadeInLeftKeys.initial}
            animate={fadeInLeftKeys.animate}
            transition={{ delay: 0.2 }}
            className="flex-1 padding-top-2 padding-left-4"
          >
            <Box className="w-100 text-center">
              <Typography variant="h3">{groupName}</Typography>
            </Box>
            <Box>{children}</Box>
          </motion.div>
        </GroupContentBox>
      </ContentWrapper>
    </SectionContainer>
  );
};
