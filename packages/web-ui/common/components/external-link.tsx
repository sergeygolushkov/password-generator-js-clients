import { Link } from '@mui/material';

export type ExternalLinkProps = {
  url: string;
  content: JSX.Element | string;
};

export const ExternalLink = ({ url, content }: ExternalLinkProps) => {
  return (
    <Link href={url} target="_blank" rel="nofollow">
      {content}
    </Link>
  );
};
