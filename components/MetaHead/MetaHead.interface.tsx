export interface I_MetaHead extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  description?: string;
  currentUrl?: string;
  imageUrl?: string;
  imageType?: 'image/jpg' | 'image/jpeg' | 'image/png' | 'image/webp' | '';
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  noFollow?: boolean;
  siteName?: string;
  keywords?: string;
}