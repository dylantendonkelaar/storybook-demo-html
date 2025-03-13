import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { ImageGridProps } from './ImageGrid';
import { createImageGrid } from './ImageGrid';

const meta = {
  title: 'Example/ImageGrid',
  tags: ['autodocs', 'CraftCMS', 'Shopify', 'WordPress', 'Magento2'],
  render: (args) => createImageGrid(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'auto',
      },
    },
  },
  args: {
    costInHours: 25,
    firstImageSrc: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42344/BarbaraTrienenPhoto_024A0914Stimmt_sfeer_okt240022.webp",
    firstImageAlt: "Sfeerimpressie kantoor Enschede",
    onCompact: false,
  },
  argTypes: {
    costInHours: { control: 'number' },
    firstImageSrc: { control: 'text' },
    firstImageAlt: { control: 'text' },
  },
} satisfies Meta<ImageGridProps>;

export default meta;
type Story = StoryObj<ImageGridProps>;

export const Default: Story = {
  args: {
    costInHours: 25,
    firstImageSrc: "https://drlrinu1crs5k.cloudfront.net/_AUTOxAUTO_crop_center-center_none/42344/BarbaraTrienenPhoto_024A0914Stimmt_sfeer_okt240022.webp",
    firstImageAlt: "Sfeerimpressie kantoor Enschede",
    onCompact: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/5aPCaC6B8bSCmvpf0wal7X/Untitled?node-id=1-2&t=EJDSGEEVglzbUbLS-1",
    },
  },
};

export const Compact: Story = {
args: {
	onCompact: true,
	},
};