import './Thermometer.css'

const Thermometer = () => {
    return (
        <main>
            <div class="thermometer-wrapper">
                <div class="thermometer-rule">
                    <span class="thermometer-rule-steps"></span>
                    <span class="thermometer-rule-steps"></span>
                    <span class="thermometer-rule-steps"></span>
                    <span class="thermometer-rule-steps"></span>
                    <span class="thermometer-rule-steps"></span>
                    <span class="thermometer-rule-steps"></span>
                    <span class="thermometer-rule-steps"></span>
                </div>
                <div class="thermometer-liquid anim-heat"></div>
                <div class="thermometer-base"></div>
            </div>
        </main>
    );
}

export default Thermometer;