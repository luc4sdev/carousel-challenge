// UploadSlider.stories.tsx
import React from 'react';
import { Meta, Story, StoryObj } from '@storybook/react';
import { UploadSlider, UploadSliderProps } from './UploadSlider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
    title: 'UploadSlider',
    component: UploadSlider,

} as Meta;

const Template: Story<UploadSliderProps> = (args) => <UploadSlider {...args} />;



export const Default = Template.bind({});
Default.args = {
    onDrop: (acceptedFiles, rejectedFiles) => console.log('Files dropped:', acceptedFiles),
    selectedImages: ['https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg', 'https://marquescomunicacaovisual.com.br/public/uploads/team-member-1.jpg'],
    showDeleteButton: true,
    setShowDeleteButton: () => { },
    currentIndex: 0,
    handleShowDeleteButton: () => { },
    deleteImage: () => { },
};

