import React from 'react'
import { useScrollFunction } from '../../Assets/Variables/Variable';

function ScrollBox({data, box: BoxComponent, dayFilter, styles}) {
    // Importation des fonctions qui provient du fichier Assets/Variables/variables.jsx
    const {
        containerRef,
        scrollRight,
        scrollLeft,
        startScrollingRight,
        startScrollingLeft,
        stopScrolling
    } = useScrollFunction();

    return (
        <div className='ContainerProgramme'>
            <div className='ContainerBtnProgListe'>
                <p
                onClick={scrollLeft}
                onMouseDown={startScrollingLeft}
                onMouseUp={stopScrolling}
                onMouseLeave={stopScrolling}
                onTouchStart={startScrollingLeft}
                onTouchEnd={stopScrolling} 
                className='btnProgListe'
                >
                    &larr;
                </p>
            </div>
            <div className={`scrollx ${styles}`} ref={containerRef}>
                <div className='liste'>
                    <BoxComponent data={data} dayFilter={dayFilter}/>
                </div>
            </div>
            <div className='ContainerBtnProgListe'>
                <p
                    onClick={scrollRight}
                    onMouseDown={startScrollingRight}
                    onMouseUp={stopScrolling}
                    onMouseLeave={stopScrolling}
                    onTouchStart={startScrollingRight}
                    onTouchEnd={stopScrolling} 
                    className='btnProgListe'>
                        &rarr;
                </p>
            </div>
        </div>
    )
}

export default ScrollBox