import React, { useEffect, useRef, useState } from 'react'


export type SortDataType = {
    sortName: string,
    sortPropertyName: string,
}

const sortData: SortDataType[] = [
    { sortName: 'Популярности (по возрастанию)', sortPropertyName: 'rating', },
    { sortName: 'Популярности (по убыванию)', sortPropertyName: '-rating', },
    { sortName: 'Цене (по возрастанию)', sortPropertyName: 'price', },
    { sortName: 'Цене (по убыванию)', sortPropertyName: '-price', },
    { sortName: 'По Размерам', sortPropertyName: '-sizes', },
    { sortName: 'Типам', sortPropertyName: '-types', }
]


export default function Sort({ sortCurrentTitle, setCurrentSortTitle }) {
    const sortRef = useRef<HTMLButtonElement | null>(null)
    const [activeSort, setActiveSort] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (i: number, item: SortDataType): void => {
        setIsOpen(!isOpen)
        setActiveSort(i)
        setCurrentSortTitle(item)
    }

    useEffect(() => {
        const closeSortMenu = (e: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        window.addEventListener('click', (e: MouseEvent): void => {
            closeSortMenu(e)
            // без очистки, ибо возникает непонятная ошибка (решу ее, если не забуду)
        })
    }, [isOpen])

    return (
        <section className='sort-container'>
            <button ref={sortRef} onClick={() => setIsOpen(!isOpen)} className='sort-icon__wrapper'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sort-icon"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                <p>Сортировка по: <span className='sort-title__active'>{sortCurrentTitle.sortName}</span></p>
            </button>
            {isOpen && (
                <ul className='sort-list'>
                    {sortData.map((item: SortDataType, i: number) =>
                    <li onClick={() => handleClick(i, item)} key={i} className={i === activeSort ? 'sort-title__active' : ''}>
                        {item.sortName}
                    </li>)}
                </ul>
            )}
        </section>
    )
}


// В данном компоненте, если я работаю с window, то лучше использовать MouseEvent, а если просто с реакт элементами, то React.MouseEvent
// Это обеспечит вам доступ к дополнительным свойствам и методам, специфичным для React 