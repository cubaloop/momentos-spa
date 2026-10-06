import { useState, useEffect } from 'react';

/**
 * Calculates current business open/closed status based on Cuba Local Time (America/Havana)
 * Schedule: Miércoles a Domingo, 10:00 AM - 6:00 PM
 * Closed: Lunes y Martes
 */
export function getCubaSpaStatus() {
  try {
    const now = new Date();
    
    // Get local time representation in Havana, Cuba
    const havanaString = now.toLocaleString('en-US', { timeZone: 'America/Havana' });
    const havanaDate = new Date(havanaString);
    
    const day = havanaDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    const hour = havanaDate.getHours();
    const minute = havanaDate.getMinutes();
    const timeInMinutes = hour * 60 + minute;
    
    // 10:00 AM = 600 min, 6:00 PM (18:00) = 1080 min
    let OPEN_MIN = 10 * 60;
    let CLOSE_MIN = 18 * 60;
    let closedDays = [1, 2]; // 1 = Monday, 2 = Tuesday

    try {
      const savedSchedule = localStorage.getItem('momentos_schedule');
      if (savedSchedule) {
        const parsed = JSON.parse(savedSchedule);
        if (parsed.openMin) OPEN_MIN = parsed.openMin;
        if (parsed.closeMin) CLOSE_MIN = parsed.closeMin;
        if (Array.isArray(parsed.closedDays)) closedDays = parsed.closedDays;
      }
    } catch (e) {}
    
    const isWorkingDay = !closedDays.includes(day);
    const isOpenHours = timeInMinutes >= OPEN_MIN && timeInMinutes < CLOSE_MIN;
    const isOpen = isWorkingDay && isOpenHours;
    
    // Formatted 12-hour time in Cuba (e.g. "1:07 PM")
    const timeFormatter = new Intl.DateTimeFormat('es-CU', {
      timeZone: 'America/Havana',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    const havanaTimeString = timeFormatter.format(now);

    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const currentDayName = dayNames[day];

    let statusText = '';
    let detailText = '';

    if (isOpen) {
      statusText = 'Abierto ahora';
      detailText = 'Cierra a las 6:00 PM';
    } else {
      statusText = 'Cerrado ahora';
      if (day === 1) {
        // Monday
        detailText = 'Abre el Miércoles a las 10:00 AM';
      } else if (day === 2) {
        // Tuesday
        detailText = 'Abre Mañana a las 10:00 AM';
      } else if (timeInMinutes < OPEN_MIN) {
        // Before 10 AM on a working day
        detailText = 'Abre Hoy a las 10:00 AM';
      } else {
        // After 6 PM
        if (day === 0) {
          // Sunday night -> Next opening Wednesday
          detailText = 'Abre el Miércoles a las 10:00 AM';
        } else {
          // Other working days night -> Opens tomorrow
          detailText = 'Abre Mañana a las 10:00 AM';
        }
      }
    }

    return {
      isOpen,
      statusText,
      detailText,
      havanaTimeString,
      currentDayName
    };
  } catch (error) {
    console.error('Error calculating Cuba time:', error);
    return {
      isOpen: true,
      statusText: 'Abierto',
      detailText: '10:00 AM - 6:00 PM',
      havanaTimeString: '',
      currentDayName: ''
    };
  }
}

/**
 * React hook that periodically updates Cuba spa status
 */
export function useCubaStatus(refreshIntervalMs = 15000) {
  const [status, setStatus] = useState(getCubaSpaStatus);

  useEffect(() => {
    setStatus(getCubaSpaStatus());
    const timer = setInterval(() => {
      setStatus(getCubaSpaStatus());
    }, refreshIntervalMs);

    return () => clearInterval(timer);
  }, [refreshIntervalMs]);

  return status;
}
