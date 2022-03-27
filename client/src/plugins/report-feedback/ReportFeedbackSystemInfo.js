/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React, { useState, useEffect } from 'react';

import { Overlay } from '../../shared/ui';

import {
  Formik,
  Form,
  Field
} from 'formik';

import {
  CheckBox
} from '../../shared/ui';

const INITIAL_VALUES = {
  version: true,
  operatingSystem: true,
  installedPlugins: true,
  executionPlatform: true
};

const BUTTON_DISABLED_TIME = 3000;


export function ReportFeedbackSystemInfo(props) {
  const { onSubmit } = props;

  const [hasSubmitCompleted, setHasSubmitCompleted] = useState(false);

  let timer;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const submitForm = (data) => {
    setHasSubmitCompleted(true);
    onSubmit(data);
    timer = setTimeout(function() {
      setHasSubmitCompleted(false);
    }, BUTTON_DISABLED_TIME);
  };

  return (
    <Overlay.Footer>
      <h2 className="overlay__title">
        在提交问题时请附带操作系统及设备硬件信息
      </h2>
      <Formik
        initialValues={ INITIAL_VALUES }
        onSubmit={ submitForm }
      >
        <Form>
          <Field
            name="version"
            component={ CheckBox }
            type="checkbox"
            label="版本"
          />
          <Field
            name="operatingSystem"
            component={ CheckBox }
            type="checkbox"
            label="操作系统版本"
          />
          <Field
            name="installedPlugins"
            component={ CheckBox }
            type="checkbox"
            label="插件信息"
          />
          <Field
            name="executionPlatform"
            component={ CheckBox }
            type="checkbox"
            label="硬件信息"
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={ hasSubmitCompleted }
          >
            {!hasSubmitCompleted ? '复制': '已复制!' }
          </button>
        </Form>
      </Formik>
    </Overlay.Footer>
  );
}
