import React from 'react'
import { Box, Modal } from '@mui/material'
import { GrClose } from 'react-icons/gr'

import ModalCSS from './styles/ModalBox.module.css'

const ModalBox = ({ title, content, open, handleClose, boxWidth = '80%' }) => {
  // Copy all 3 below to where you want to use Component and pass "open" & "handleClose" as props

  // const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true)
  //   const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: boxWidth,
    maxWidth: '1200px',
    borderRadius: '8px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className={ModalCSS.titleContainer}>
          <h2 className={ModalCSS.title}>{title}</h2>
          <GrClose
            style={{
              color: 'blue',
              strokeWidth: '2',
              stroke: '#fff',
              cursor: 'pointer',
              fontSize: '18px',
            }}
            onClick={handleClose}
          />
        </div>
        <div className={ModalCSS.content}>{content}</div>
      </Box>
    </Modal>
  )
}

export default ModalBox
