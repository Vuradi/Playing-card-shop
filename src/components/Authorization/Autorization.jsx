import React from 'react';
import {useForm} from "react-hook-form";
import './Autorization.css';

function Autorization() {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'main__form-registration'}>
            <h2 className={'main__form-title'}>Регистрация</h2>
            <label className={'main__email-lable'} for={'email'}>Почта (e-mail)
                <div className={'main__email-error'}>{errors?.email && <span className={'main__erorrs'}>{errors?.email?.message}</span>}</div>
            </label>
            <input className={'main__email'} id={'email'} type={'text'} placeholder={'Введите e-mail'} {...register('email', {
                required: 'Поле обязательно для заполнения',
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Почта указана некорректно'
                }
            })} />
            <label className={'main__password-lable'} for={'password'}>Пароль
                <div className={'main__password-error'}>{errors?.password && <span className={'main__erorrs'}>{errors?.password?.message}</span>}</div>
            </label>
            <input className={'main__password'} id={'password'} type={'password'} placeholder={'Введите пароль'} {...register('password', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                    value: 5,
                    message: 'Пароль должен содержать минимум 5 символов'
                }
            })}/>
            <label className={'main__checkbox-lable'} htmlFor={'checkbox-userterms'}>Пользовательское
                    соглашение
                <input className={'main__checkbox-terms'} id={'checkbox-userterms'} type={'checkbox'} {...register('termsOfUser', {
                    required:'Пункт обязательный'
                })}/>
                <div className={'main__field-mark'}></div>
                <div className={'main__box-error'}>{errors?.password && <span className={'main__erorrs'}>{errors?.termsOfUser?.message}</span>}</div>
            </label>
            <button className={'main__btn-registration'} type={'submit'} >Регистрация</button>
        </form>
    )
}

export default Autorization;