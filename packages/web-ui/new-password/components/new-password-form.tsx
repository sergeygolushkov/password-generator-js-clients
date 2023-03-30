import { Box, Button } from '@mui/material';
import { NewPasswordOptions } from './new-password-options';
import { NewPasswordBox } from './new-password-box';
import {
  buttonAnimationVariants,
  buttonAnimationVariantsKeys,
  DarkButton,
} from '../../common';
import styled from '@emotion/styled';
import {
  ClipboardContext,
  NotificationContext,
  usePasswordCreator,
} from 'shared';
import { useContext } from 'react';
import { motion } from 'framer-motion';

export type NewPasswordFormProps = {};

const ButtonsRow = styled(Box)`
  display: flex;

  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const NewPasswordForm = (props: NewPasswordFormProps) => {
  const { password, generateNew } = usePasswordCreator();
  const { writeTextToClipboard } = useContext(ClipboardContext);
  const notification = useContext(NotificationContext);

  const copyButtonClick = async () => {
    if (!password) return;
    const result = await writeTextToClipboard(password);
    if (result) {
      notification.success('Password copied to clipboard');
    } else {
      notification.error('Error happened while copying to clipboard');
    }
  };

  return (
    <>
      <Box className="padding-2 w-100">
        <NewPasswordBox newPassword={password} />
      </Box>
      <NewPasswordOptions />
      <ButtonsRow>
        <Box className="flex-1 padding-2">
          <motion.div
            variants={buttonAnimationVariants}
            whileHover={buttonAnimationVariantsKeys.hover}
            whileTap={buttonAnimationVariantsKeys.tap}
          >
            <Button
              variant="contained"
              className="w-100"
              color="secondary"
              onClick={generateNew}
            >
              Generate new
            </Button>
          </motion.div>
        </Box>
        <Box className="flex-1 padding-2">
          <motion.div
            variants={buttonAnimationVariants}
            whileHover={buttonAnimationVariantsKeys.hover}
            whileTap={buttonAnimationVariantsKeys.tap}
          >
            <DarkButton
              variant="contained"
              className="w-100"
              color="primary"
              onClick={copyButtonClick}
            >
              Copy password
            </DarkButton>
          </motion.div>
        </Box>
      </ButtonsRow>
    </>
  );
};
