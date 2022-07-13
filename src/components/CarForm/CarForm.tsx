import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName,chooseComics,chooseDesc,chooseSuper } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComp/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';


interface CharFormProps {
    id?:string;
    data?:{}
}

interface CharState {
    comics_appeared: number;
    desc: string;
    name: string;
    super_power: string;
}

export const CharForm = (props:CharFormProps) => {

    const dispatch = useDispatch();
    let { charData, handleDataFetch } = useGetData();
    const store = useStore()
    const name = useSelector<CharState>(state => state.name)
    const desc = useSelector<CharState>(state => state.desc)
    const super_power = useSelector<CharState>(state => state.super_power)
    const comics_appeared = useSelector<CharState>(state => state.comics_appeared)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDesc(data.desc))
            dispatch(chooseSuper(data.super_power))
            dispatch(chooseComics(data.comics_appeared))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <Input {...register('name')} name="name" placeholder='Levi' label="Char's Name" />
                </div>
                <div>
                    <Input {...register('desc')} name="desc" placeholder='Describe here...' label="Char Desc" />
                </div>
                <div>
                    <Input {...register('super_power')} name="super_power" placeholder='Fast?' label="Super Power" />
                </div>
                <div>
                    <Input {...register('comics_appeared')} name="comics_appeared" placeholder='1' label="Comics Appeared In" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}