import styled from '@emotion/styled';
import { changeColorBrightness, getColorContrast } from '../styles/colors';
import hexToRgba from 'hex-to-rgba';
import { css } from 'emotion';

const PostTheme = styled.div(
  ({ color, complementaryColorLight, complementaryColorDark }) => {
    return css`
      --post-color: ${color};
      --post-color-plus-15: ${changeColorBrightness(color, 15)};
      --post-color-minus-30: ${changeColorBrightness(color, -30)};
      --post-color-0_3: ${hexToRgba(color, 0.3)};
      --post-color-0_15: ${hexToRgba(color, 0.15)};
      --post-color-0_0: ${hexToRgba(color, 0)};

      --post-color-contrast: ${getColorContrast(color)};
      --post-color-contrast-shadow-0_45: ${hexToRgba(
        getColorContrast(color, 128, true),
        0.45
      )};

      --post-complementary-color: ${complementaryColorLight};

      --cover-image-color: var(--post-color);
      --cover-image-color-0_3: var(--post-color-0_3);
      --cover-image-border-width: 6px;

      --gallery-bullet-color: var(--post-complementary-color);

      @media screen and (prefers-color-scheme: dark) {
        --post-complementary-color: ${complementaryColorDark};
      }
    `;
  }
);

export default PostTheme;