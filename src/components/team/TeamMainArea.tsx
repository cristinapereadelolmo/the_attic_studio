import React from 'react';
import BradcrumbTwo from '../common/breadcrumb/BradcrumbTwo';
import TeamArea from './TeamArea';
import FaqArea from '../about/FaqArea';

const TeamMainArea = () => {
    return (
        <>
            <BradcrumbTwo teamTitle="Team Member" />
            <TeamArea />
            <FaqArea />
        </>
    );
};

export default TeamMainArea;