import { styled } from '@stitches/react';

import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
const StyledAccordion = styled(Accordion.Root, {});

const StyledItem = styled(Accordion.Item, {});

const StyledHeader = styled(Accordion.Header, {});

const StyledTrigger = styled(Accordion.Trigger, {});

const StyledPanel = styled(Accordion.Content, {});

export default () => {

    return (

        <StyledAccordion type="single">

            <StyledItem value="item-1">

                <StyledHeader>

                    <StyledTrigger>Trigger text</StyledTrigger>

                </StyledHeader>

                <StyledPanel>Panel content</StyledPanel>

            </StyledItem>

        </StyledAccordion>

    );

};

