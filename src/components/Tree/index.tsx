import React, { FC, useState } from 'react';
import { IJsonTreeProps } from './types';
import './style.scss';

const Tree: FC<IJsonTreeProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = (title: string) => {
        if(data.nodes.length) {
            setIsOpen(state => !state);
        }
        console.log(title);
    };

    return (
        <div className="tree-container">
            <button
                onClick={() => onClick(data.title)}
                className={`${data.nodes.length && (isOpen ? 'open' : 'closed')}`}
            >
                {data.title}
            </button>
            <ul className="tree">
                {
                    isOpen && data.nodes.length && data.nodes.map((item: object, index: number) => {
                        return <Tree data={item} key={`${index}`} />
                    })
                }
            </ul>
        </div>
    );
}

export default Tree;