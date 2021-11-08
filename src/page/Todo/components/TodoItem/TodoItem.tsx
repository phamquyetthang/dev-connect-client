import React, { FunctionComponent } from 'react'
import Box from 'src/components/Base/Box'
import { TodoItemWrapper } from './style'

interface IProps {
    item: any;
}

export const TodoItem: FunctionComponent<IProps> = ({
    item,
}) => {
    return (
        <TodoItemWrapper>
            <Box>{JSON.stringify(item)}</Box>
        </TodoItemWrapper>
    )
}
