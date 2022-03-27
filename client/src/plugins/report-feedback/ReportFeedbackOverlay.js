/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React, { Fragment } from 'react';

import { Overlay } from '../../shared/ui';

import { ReportFeedbackSystemInfo } from './ReportFeedbackSystemInfo';

import css from './ReportFeedbackOverlay.less';

const REPORT_ISSUE_LINK = 'https://github.com/GalliumWang';
const USER_FORUM_LINK = '#';

const OFFSET = { right: 0 };


export function ReportFeedbackOverlay(props) {
  return (
    <Overlay
      anchor={ props.anchor }
      onClose={ props.onClose }
      offset={ OFFSET }
      className={ css.ReportFeedbackOverlay }
    >
      <ReportFeedbackChannels
        onClose={ props.onClose }
      />
      <ReportFeedbackSystemInfo
        onSubmit={ props.onSubmit }
      />
    </Overlay>
  );
}

function ReportFeedbackChannels(props) {
  return (
    <Fragment>
      <Overlay.Title>
        在 Github 上向开发者提出 Issue
      </Overlay.Title>
      <Overlay.Body>
        <ReportFeedbackChannelsContent
          onClose={ props.onClose }
        />
      </Overlay.Body>
    </Fragment>
  );
}

function ReportFeedbackChannelsContent(props) {
  return (
    <Fragment>
      <p>
        Have you found an issue or would like to send a feature request?<br />
        <a onClick={ props.onClose } href={ REPORT_ISSUE_LINK }>王佳的 Github 主页</a>
      </p>
    </Fragment>
  );
}
