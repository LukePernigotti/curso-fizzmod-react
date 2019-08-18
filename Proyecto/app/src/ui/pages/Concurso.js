import React, { Component, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formSubmit, handleChangeNombre, handleChangeEdad } from "../../api/actions";

import '../../css/concurso.css'

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: "auto",
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function getSteps() {
    return ['Completa tus datos', 'Cuentanos cuál es tu película favorita', 'Escoge el premio que te gustaría ganar'];
}

function getStepContent(stepIndex, props) {
    let { form_nombre, form_edad } = props;
    switch (stepIndex) {
        case 0:
            return <form noValidate autoComplete="off" className="concurso-form">
                <TextField label="Nombre" margin="normal" />
                <TextField label="Edad" margin="normal" />
                <TextField label="DNI" margin="normal" />
                <TextField label="Correo" margin="normal" />
                <TextField label="Domicilio" margin="normal" />
            </form>;
        case 1:
            return <form noValidate autoComplete="off" className="concurso-form">
                <TextField label="¿Cuál es tu película favorita?" margin="normal" />
            </form>;
        case 2:
            return <form noValidate autoComplete="off" className="concurso-form">
                <RadioGroup aria-label="premios" name="prize">
                    <FormControlLabel
                        value="Giftcard"
                        control={<Radio color="primary" />}
                        label="Giftcard"
                    />
                    <FormControlLabel
                        value="Viaje gratis"
                        control={<Radio color="primary" />}
                        label="Viaje gratis"
                    />
                    <FormControlLabel
                        value="PS4"
                        control={<Radio color="primary" />}
                        label="PS4"
                    />
                    <FormControlLabel
                        value="Samsung Galaxy S10"
                        control={<Radio color="primary" />}
                        label="Samsung Galaxy S10"
                    />
                </RadioGroup>
            </form>;;
        default:
            return 'Uknown stepIndex';
    }
}

function Concurso(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        nombre: '',
        edad: '',
        dni: '',
        correo: '',
        domicilio: '',
    });
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };


    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        if (activeStep == 2) { formSubmit() };
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }

    let { formDone } = props;

    return (
        <div className={classes.root}>
            <Stepper activeStep={formDone ? 3 : activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>¡Gracias por participar!</Typography>
                    </div>
                ) : (
                        <div>
                            {getStepContent(activeStep, props)}
                            <div className="stepper-buttons">
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Atrás
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default connect(
    store => ({
        formDone: store.formDone,
        form_nombre: store.form_nombre,
        form_edad: store.form_edad,
    }),
    dispatch => ({
        formSubmit: bindActionCreators(formSubmit, dispatch),
        handleChangeNombre: bindActionCreators(handleChangeNombre, dispatch),
    })
)(Concurso)