initBattery()

function initBattery() {
    const batteryLiquid = document.querySelector('.battery-liquid'),
        batteryStatus = document.querySelector('.battery-status'),
        batteryPercentage = document.querySelector('.battery-percentage')

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            // Update the battery level
            let level = Math.floor(batt.level * 100)
            batteryPercentage.innerHTML = level+ '%'

            // Update battery background
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`

            // Validate full battery or low battery status
            if (level == 100) {
                // Validate as full battery
                batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`
                batteryLiquid.style.height = '103%' // to hide the ellipse
            }
            else if (level <= 20 &! batt.charging) {
                // Validate as low battery
                batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`
            }
            else if (batt.charging) {
                // Validate as charging
                batteryStatus.innerHTML = 'Charging... <i class="ri-flashlight-line animated-green"></i>'
            }
            else {
                // Validate as nothinng
                batteryStatus.innerHTML = ' '
            }

            // Battery color
            if(level <=20){
                batteryLiquid.classList.add('gradient-color-red')
                batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green')
            }
            else if(level <= 40){
                batteryLiquid.classList.add('gradient-color-orange')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
            }
            else if(level <= 80){
                batteryLiquid.classList.add('gradient-color-yellow')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green')
            }
            else{
                batteryLiquid.classList.add('gradient-color-green')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-yellow')
            }
        }
        updateBattery()

        // Update battery status
        batt.addEventListener('chargingchange', () => {updateBattery()})
        batt.addEventListener('levelchange', () => {updateBattery()})
    })
}