import React, { useState } from 'react'
import { Modal, Button, Container, Tabs, Tab, Col, Row, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import './ModalFaskes.css'
import FormInformasiUmum from './FormInformasiUmum'
import Maps from '../Maps/Maps'

function ModalFaskes({ show, onHide, props }) {

    const [curLoc, setCurLoc] = useState(null)

    const init = ({
        // namaFaskes: "",
        desa: "",
        telepon: 0,
        alamatFaskes: "",
        curLoc
    })

    const handleChangePreview = (event) => {
        const nama = event.target.name;
        const value = event.target.value;
        // handleValidation(nama, value);
        setCurLoc({
            ...curLoc,
            [nama]: value
            // lat: value.lat, lng: value.lng,
        });
    }

    const [key, setKey] = useState('home');

    const schema = yup.object().shape({
        // namaFaskes: yup.string().required('Nama harus diisi!'),
        telepon: yup.number().required('Nomor telepon harus diisi!'),
        desa: yup.string().required('Nama desa harus diisi!'),
        alamatFaskes: yup.string().required('Alamat lengkap faskes harus diisi!'),
        provinsi: yup.string().required('Pilih provinsi terlebih dahulu'),
        // kabupaten: yup.string().required('Pilih kabupaten terlebih dahulu'),
        // kecamatan: yup.string().required('Pilih kecamatan terlebih dahulu'),
        // kelurahan: yup.string().required('Pilih kelurahan terlebih dahulu'),
        curLoc: yup.string().required('')
    })

    console.log(curLoc)

    return (
        <>
            <Modal
                {...props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='modal-header-session' closeButton>
                    <Modal.Title className='title-header-session'>Form Pembuatan Sesi</Modal.Title>

                </Modal.Header>
                <Modal.Body style={{ margin: '0' }}>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values) => { console.log(values) }}
                            initialValues={init}
                        // handleInputNamaFaskes={handleInputNamaFaskes}
                        // handleInputWilayah={handleInputWilayah}

                        >
                            {({ handleSubmit,
                                handleChange,
                                // handleInputNamaFaskes,
                                // handleInputWilayah,
                                values,
                                // handleBlur,
                                errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Tabs
                                        id="controlled-tab-example"
                                        activeKey={key}
                                        onSelect={(k) => setKey(k)}
                                        className="mb-3"
                                    >
                                        {console.log("isi desa, nomor telepon, alamat", values)}
                                        <Tab eventKey="home" title="Informasi Umum">
                                            {/* <Sonnet /> */}
                                            <Row classname="mb-3">
                                                <Col>
                                                    <FormInformasiUmum
                                                        handlechange={handleChange}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Label>Telepon</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name='telepon'
                                                        value={values.telepon}
                                                        onChange={handleChange}
                                                        isInvalid={errors.telepon}
                                                        placeholder="Masukkan nomor telepon..." />
                                                    {/* <Form.Label>Desa</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name='desa'
                                                        value={values.desa}
                                                        onChange={handleChange}
                                                        isInvalid={errors.desa}
                                                        placeholder="Masukkan nama desa..." /> */}
                                                    {/* <Row className='row-alamat-faskes'> */}
                                                    <Form.Label style={{ padding: '0' }}>Alamat</Form.Label>
                                                    <Form.Control
                                                        // type="text"
                                                        as='textarea'
                                                        row={3}
                                                        name='alamatFaskes'
                                                        value={values.alamatFaskes}
                                                        onChange={handleChange}
                                                        isInvalid={errors.alamatFaskes}
                                                        placeholder="Masukkan alamat lengkap..." />
                                                    {/* </Row> */}
                                                </Col>
                                                {/* <Col> */}
                                                {/* <Container> */}
                                                {/* <Form.Label>Telepon</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name='telepon'
                                                        value={values.telepon}
                                                        onChange={handleChange}
                                                        isInvalid={errors.telepon}
                                                        placeholder="Masukkan nomor telepon..." /> */}
                                                {/* </Container> */}

                                                {/* </Col> */}


                                            </Row>


                                        </Tab>
                                        <Tab eventKey="Detail" title="Detail">
                                            <Row>
                                                <Col>
                                                    <p>Titik lokasi</p>
                                                    <Maps curloc={curLoc} setCurLoc={setCurLoc} />
                                                </Col>
                                                <Col>
                                                    <Form.Label>Preview</Form.Label>
                                                    <Form.Control as="textarea" rows="3" name="preview" onChange={handleChangePreview} value={JSON.stringify(curLoc)}></Form.Control>
                                                </Col>
                                            </Row>

                                        </Tab>
                                    </Tabs>
                                    <Modal.Footer style={{ justifyContent: 'center' }}>
                                        <Button className='button-modal-session' variant="primary" type='submit'>Simpan</Button>
                                    </Modal.Footer>
                                </Form>
                            )}


                        </Formik>
                    </Container>
                    {/* <FormFaskes/> */}

                </Modal.Body>

            </Modal>
        </>
    )
}

export default ModalFaskes
