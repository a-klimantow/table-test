import React, { Fragment, useContext } from "react"
import { Icon } from "./Icon"
import { Button } from "./Button"

export const TableButtons = ({ isEdit, save, edit, del, cancel }) =>
  isEdit ? (
    <Fragment key="1">
      <Button kind="info" title="Сохранить" onClick={save}>
        <Icon type="save" />
      </Button>
      <Button kind="warning" title="Отмена" onClick={cancel}>
        <Icon type="ban" />
      </Button>
    </Fragment>
  ) : (
    <Fragment key="2">
      <Button kind="primary" title="Редактировать" onClick={edit}>
        <Icon type="user-edit" />
      </Button>
      <Button kind="danger" title="Удалить" onClick={del}>
        <Icon type="trash" />
      </Button>
    </Fragment>
  )
